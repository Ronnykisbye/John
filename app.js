const operators = ["Anna Jensen", "Brian Nielsen", "Camilla Sørensen", "Daniel Hansen", "Eva Madsen", "Frederik Larsen"];
const STORAGE_KEY = "machineHandoverHistoryV1";

const form = document.getElementById("handoverForm");
const statusSelect = document.getElementById("machineStatus");
const errorField = document.getElementById("errorField");
const errorDescription = document.getElementById("errorDescription");
const charCount = document.getElementById("charCount");
const message = document.getElementById("formMessage");
const historyList = document.getElementById("historyList");
const saveStatus = document.getElementById("saveStatus");
const installBtn = document.getElementById("installBtn");
let deferredPrompt = null;

function fillOperators() {
  ["outgoingOperator", "incomingOperator"].forEach(id => {
    const select = document.getElementById(id);
    select.innerHTML = '<option value="">Vælg operatør</option>' + operators.map(name => `<option>${name}</option>`).join("");
  });
}

function toggleErrorField() {
  const needsError = ["B", "C"].includes(statusSelect.value);
  errorField.classList.toggle("hidden", !needsError);
  errorDescription.required = needsError;
  if (!needsError) errorDescription.value = "";
  charCount.textContent = errorDescription.value.length;
}

function showMessage(text, type) {
  message.textContent = text;
  message.className = `message ${type}`;
  message.hidden = false;
}

function hideMessage() {
  message.hidden = true;
}

function getHistory() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { return []; }
}

function saveHistory(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items.slice(0, 25)));
}

function escapeHtml(value = "") {
  return value.replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
}

function renderHistory() {
  const items = getHistory();
  if (!items.length) {
    historyList.innerHTML = '<div class="empty">Der er endnu ingen gemte overdragelser på denne enhed.</div>';
    return;
  }

  historyList.innerHTML = items.map(item => `
    <article class="handover">
      <div class="handover-badge ${item.machineStatus}">${item.machineStatus}</div>
      <div>
        <h3>${escapeHtml(item.machineNumber)} • ${escapeHtml(item.orderNumber)}</h3>
        <p><strong>${escapeHtml(item.batch)}</strong> · ${escapeHtml(item.orderStart)} → ${escapeHtml(item.orderEnd)}</p>
        <p>${escapeHtml(item.outgoingOperator)} → ${escapeHtml(item.incomingOperator)}</p>
        ${item.errorDescription ? `<p class="error-note">${escapeHtml(item.errorDescription)}</p>` : ""}
      </div>
      <time datetime="${item.createdAt}">${new Date(item.createdAt).toLocaleString("da-DK", {dateStyle:"short", timeStyle:"short"})}</time>
    </article>
  `).join("");
}

statusSelect.addEventListener("change", toggleErrorField);
errorDescription.addEventListener("input", () => charCount.textContent = errorDescription.value.length);

form.addEventListener("submit", event => {
  event.preventDefault();
  hideMessage();

  if (!form.checkValidity()) {
    form.reportValidity();
    showMessage("Udfyld venligst alle obligatoriske felter.", "error");
    return;
  }

  const outgoing = document.getElementById("outgoingOperator").value;
  const incoming = document.getElementById("incomingOperator").value;
  if (outgoing === incoming) {
    showMessage("Afgående og tilkommende operatør skal være to forskellige personer.", "error");
    return;
  }

  const data = Object.fromEntries(new FormData(form).entries());
  const item = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    ...data,
    createdAt: new Date().toISOString()
  };

  const history = getHistory();
  history.unshift(item);
  saveHistory(history);
  renderHistory();
  showMessage("Overdragelsen er gemt på denne enhed.", "success");
  saveStatus.textContent = "Gemt";
  setTimeout(() => saveStatus.textContent = "Klar", 2500);
  form.reset();
  toggleErrorField();
  window.scrollTo({top: 0, behavior: "smooth"});
});

document.getElementById("resetBtn").addEventListener("click", () => {
  form.reset();
  toggleErrorField();
  hideMessage();
});

document.getElementById("clearHistoryBtn").addEventListener("click", () => {
  if (confirm("Vil du slette alle gemte overdragelser på denne enhed?")) {
    localStorage.removeItem(STORAGE_KEY);
    renderHistory();
  }
});

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  deferredPrompt = event;
  installBtn.hidden = false;
});

installBtn.addEventListener("click", async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installBtn.hidden = true;
});

window.addEventListener("appinstalled", () => installBtn.hidden = true);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
}

fillOperators();
toggleErrorField();
renderHistory();
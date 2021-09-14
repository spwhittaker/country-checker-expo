const rollBack = document.getElementById("rollbackStageAction");
const processOrderManual = document.getElementById("3").childNodes[1];
const createPendingOrder = document.getElementById("1").childNodes[1];

if (
  createPendingOrder.innerText === "Scheduling completed and order created" &&
  processOrderManual.innerHTML === "Process order manual"
) {
  document.getElementById("migrateToQB").click();
  setTimeout(() => {
    document
      .getElementsByClassName(
        "ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"
      )[17]
      .click();
  }, 1000);
} else {
  if (
    !(
      createPendingOrder.innerText ===
        "Scheduling completed and order created" &&
      processOrderManual.innerHTML === "&nbsp;"
    )
  ) {
    rollBack.click();
    setTimeout(() => {
      document
        .getElementsByClassName(
          "ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"
        )[17]
        .click();
    }, 1000);
  }

  if (
    createPendingOrder.innerText === "Scheduling completed and order created" &&
    processOrderManual.innerHTML === "&nbsp;"
  ) {
    document.getElementById("processOrderAction").click();
    setTimeout(() => {
      document
        .getElementsByClassName(
          "ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"
        )[17]
        .click();
    }, 1000);
  }
}

getDocumentTransparencia = async (doc) => {
  if (doc) {
    const showCaseFrame = document.getElementById("showCaseFrame");
    showCaseFrame.src = doc;
  }
};

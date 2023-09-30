function downloadFile(linkId, linkHref) {
    const downloadButton = document.getElementById(linkId);

    downloadButton.addEventListener('click', function () {
        const a = document.createElement('a');
        a.href = linkHref;
        a.download = linkHref.split('/').pop(); // Set the filename for download
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
}

// Call the function for each download link
downloadFile('download-button-1', './global.css');

import jsPDF from 'jspdf';


const generatePDF = ({ text, fileName = 'document.pdf' }) => {
  return new Promise((resolve) => {
    // Create new PDF document
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true
    });

    // Set font styles
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.setTextColor(33, 33, 33); // Dark gray text

    // Document configuration
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const maxLineWidth = pageWidth - margin * 2;
    const lineHeight = 7; // Approx 1.2 * fontSize (12pt ~ 4.2mm, so 7mm is generous)

    // Split text into lines that fit the width
    const lines = doc.splitTextToSize(text, maxLineWidth);
    
    let cursorY = margin;

    // Iterate through lines and add to PDF
    lines.forEach((line) => {
      // Check if we need a new page
      if (cursorY + lineHeight > pageHeight - margin) {
        doc.addPage();
        cursorY = margin;
      }
      
      doc.text(line, margin, cursorY);
      cursorY += lineHeight;
    });

    // Save the PDF
    const finalFileName = fileName.endsWith('.pdf') ? fileName : `${fileName}.pdf`;
    doc.save(finalFileName);
    
    resolve(); // Resolve promise when done
  });
};

export default generatePDF;

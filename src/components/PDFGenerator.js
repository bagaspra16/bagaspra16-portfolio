import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const PDFGenerator = () => {
  const pdfRef = useRef(null);

  const generatePDF = async () => {
    try {
      // Create a new PDF document
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      
      // Set background color
      pdf.setFillColor(22, 20, 36); // #161424
      pdf.rect(0, 0, pageWidth, pageHeight, 'F');
      
      // Set text color to white
      pdf.setTextColor(255, 255, 255);
      
      // Add title
      pdf.setFontSize(24);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Bagas Pratama Junianika', pageWidth / 2, 30, { align: 'center' });
      
      // Add subtitle
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'normal');
      pdf.text('FullStack Developer | Java Engineer | Freelancer', pageWidth / 2, 40, { align: 'center' });
      
      // Add contact information
      pdf.setFontSize(12);
      pdf.text('Email: bagaspratamajunianika72@gmail.com', 20, 60);
      pdf.text('WhatsApp: +62 812-1817-7320', 20, 70);
      pdf.text('Portfolio: https://bagaspra16-portfolio.vercel.app/', 20, 80);
      
      // Add About section
      pdf.setFontSize(18);
      pdf.setFont('helvetica', 'bold');
      pdf.text('About', 20, 100);
      
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'normal');
      const aboutText = `I am Bagas Pratama Junianika, an experienced developer with expertise in developing web applications with ERP concepts using the Laravel framework and critical understanding of business processes. My love of technology and problem solving has driven me to develop a strong foundation in various programming languages, software modeling, and web development. My life motto is "Dive into wisdom, unleash your might." therefore I want to continue to develop my abilities to the peak of my abilities.`;
      
      const splitAboutText = pdf.splitTextToSize(aboutText, pageWidth - 40);
      pdf.text(splitAboutText, 20, 110);
      
      // Add Skills section
      pdf.setFontSize(18);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Skills', 20, 160);
      
      // Programming Languages
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Programming Languages:', 20, 175);
      
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'normal');
      const programmingLanguages = [
        'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'PostgreSQL', 
        'PHP', 'C++', 'Java', 'Python'
      ];
      
      let yPos = 185;
      programmingLanguages.forEach((lang, index) => {
        if (index % 3 === 0 && index > 0) {
          yPos += 10;
        }
        const xPos = 20 + (index % 3) * 60;
        pdf.text(`• ${lang}`, xPos, yPos);
      });
      
      // Tools & Frameworks
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Tools & Frameworks:', 20, 220);
      
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'normal');
      const toolsFrameworks = [
        'Windows', 'Visual Studio', 'Bootstrap', 'Git', 'Laravel',
        'GitHub', 'Netbeans', 'Chat GPT', 'Figma', 'DBeaver'
      ];
      
      yPos = 230;
      toolsFrameworks.forEach((tool, index) => {
        if (index % 3 === 0 && index > 0) {
          yPos += 10;
        }
        const xPos = 20 + (index % 3) * 60;
        pdf.text(`• ${tool}`, xPos, yPos);
      });
      
      // Add Work section
      pdf.setFontSize(18);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Projects', 20, 280);
      
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'normal');
      const projects = [
        'Information System RPL - https://github.com/bagaspra16/information-system-rpl',
        'Present Web - https://github.com/bagaspra16/present-web',
        'Project 3 - https://github.com/bagaspra16/project3',
        'Project 4 - https://github.com/bagaspra16/project4',
        'Project 5 - https://github.com/bagaspra16/project5',
        'Project 6 - https://github.com/bagaspra16/project6',
        'Project 7 - https://github.com/bagaspra16/project7',
        'Project 8 - https://github.com/bagaspra16/project8',
        'Project 9 - https://github.com/bagaspra16/project9'
      ];
      
      yPos = 295;
      projects.forEach((project, index) => {
        if (yPos > pageHeight - 20) {
          pdf.addPage();
          pdf.setFillColor(22, 20, 36);
          pdf.rect(0, 0, pageWidth, pageHeight, 'F');
          pdf.setTextColor(255, 255, 255);
          yPos = 20;
        }
        const splitProject = pdf.splitTextToSize(project, pageWidth - 40);
        pdf.text(splitProject, 20, yPos);
        yPos += splitProject.length * 5 + 5;
      });
      
      // Save the PDF
      pdf.save('Bagas_Pratama_Junianika_Portfolio.pdf');
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

  return (
    <div className="pdf-generator">
      <button 
        onClick={generatePDF}
        className="button"
        style={{
          backgroundColor: 'var(--first-color)',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: '600',
          margin: '20px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        }}
      >
        📄 Download Portfolio PDF
      </button>
    </div>
  );
};

export default PDFGenerator;

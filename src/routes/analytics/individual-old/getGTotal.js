



// export default function calcGTotal(reports) {
//     for (let i = 0; i < reports.length; i++) {
//         const report = reports[i];
//         calcGTotal2(report);
//     }

// }

export default function calcGTotal(report) {
  let examTotalMarks = 0;
  let totalMarksObtained = 0;
  for (let i = 0; i < report.answers.length; i++) {
    examTotalMarks += report.answers[i].totalMarks;
    totalMarksObtained += report.answers[i].marksObtained;
  }
  report.examTotalMarks = examTotalMarks;
  report.totalMarksObtained = totalMarksObtained;
  report.percentage = (totalMarksObtained / examTotalMarks) * 100;
}

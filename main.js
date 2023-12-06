function check_me() {}
// function check_me() {
//   var otv = [],
//     i,
//     j,
//     tmp,
//     str1,
//     names,
//     vah = false,
//     totaltrueQ = [],
//     totalS = [],
//     total = 0,
//     totalQAll = 0,
//     totalSAll = 0,
//     answerQ = [],
//     answerTrue = 0;
//   if (document.getElementById("torf1") != null) {
//     for (i = 0; i < vinq.length; i++) {
//       otv[i] = [];
//       for (j = 0; j < vinq[i]; j++) {
//         names = document.getElementsByName("Q" + (i + 1));
//         if (names[j].checked) otv[i][j] = 1;
//         else otv[i][j] = 0;
//       }
//       if (parseInt(otv[i].join(""), 2) == 0) vah = true;
//     }
//   }
//   if (document.getElementById("svobod1") != null) {
//     for (i = 0; i < svob.length; i++) {
//       names = document.getElementsByName("S" + (i + 1));
//       if (names[0].value == "") vah = true;
//     }
//   }
//   if (vah) alert("Вы выполнили не все задания. Проверьте себя.");
//   else {
//     if (document.getElementById("torf1") != null) {
//       for (i = 0; i < rez.length; i++) {
//         str1 = rez[i].toString(2);
//         while (str1.length < vinq[i]) str1 = "0" + str1;
//         totaltrueQ[i] = 0;
//         for (j = 0; j < str1.length; j++) {
//           totaltrueQ[i] += parseInt(str1[j]);
//         }
//         totalQAll += kfQ[i];
//         if (parseInt(otv[i].join(""), 2) == rez[i]) {
//           document.getElementById("torf" + (i + 1)).innerHTML =
//             '<div class="imgtrue"></div>';
//           total += kfQ[i];
//           answerTrue += kfQ[i];
//         } else {
//           for (j = 0; j < str1.length; j++) {
//             answerQ[j] = otv[i][j] / parseInt(str1[j]);
//             if (isNaN(answerQ[j])) answerQ[j] = 2;
//           }
//           if (!isNumeric(answerQ.join(""))) {
//             document.getElementById("torf" + (i + 1)).innerHTML =
//               '<div class="imgfalse"></div>';
//             tmp = 0;
//             for (j = 0; j < answerQ.length; j++) {
//               if (answerQ[j] < 2) tmp += answerQ[j];
//               if (answerQ[j] > 2) tmp -= kfFalse[i];
//             }
//             if (tmp < 0) tmp = 0;
//             answerTrue += (kfQ[i] * tmp) / totaltrueQ[i];
//           } else {
//             document.getElementById("torf" + (i + 1)).innerHTML =
//               '<div class="img_nearly_true"></div>';
//             tmp = 0;
//             for (j = 0; j < answerQ.length; j++) {
//               if (answerQ[j] < 2) tmp += answerQ[j];
//             }
//             total += (kfQ[i] * tmp) / totaltrueQ[i];
//             answerTrue += (kfQ[i] * tmp) / totaltrueQ[i];
//           }
//         }
//       }
//     }
//     if (document.getElementById("svobod1") != null) {
//       for (i = 0; i < svob.length; i++) {
//         totalS[i] = 0;
//         names = document.getElementsByName("S" + (i + 1));

//         var names1 = names[0].value;
//         names1 = names1.replace("ё", "е");
//         names1 = names1.replace("Ё", "Е");
//         truerez = code(svob[i]);
//         for (j = 0; j < truerez.length; j++) {
//           if (names1 == truerez[j]) {
//             totalS[i] = 1;
//           }
//         }

//         totalSAll += kfS[i];
//         if (totalS[i] == 1) {
//           document.getElementById("svobod" + (i + 1)).innerHTML =
//             "<div class=imgtrue></div>";
//           total += kfS[i];
//           answerTrue += kfS[i];
//         } else
//           document.getElementById("svobod" + (i + 1)).innerHTML =
//             "<div class=imgfalse></div>";
//       }
//     }
//     showResult(totalQAll + totalSAll, answerTrue, total);
//   }
// }

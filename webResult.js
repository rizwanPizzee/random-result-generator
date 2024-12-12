let a = 0;
document.addEventListener('keydown', function (event) {
    if (event.code === 'Escape') {
        displayNone('outer-warning');
    }
});


function searchButton(id1, id2, details_student, details_fname, details_roll_no, id3) {
    if (document.getElementById(details_student).value == '' || document.getElementById(details_fname).value == '' || document.getElementById(details_roll_no).value == '') {
        document.getElementById(id2).style.display = 'block';
    }
    else {
        document.getElementById(id3).style.display = 'flex';
        detailsTransfer();
        if (a == 0) {
            document.getElementById(id1).style.display = 'none';
            a = 1;
        }
        else {
            document.getElementById(id1).style.display = 'flex';
            a = 0;
        }
    }
}

function displayNone(id) {
    document.getElementById(id).style.display = 'none';
}

let marks;

function detailsTransfer() {
    document.getElementById('roll-no-out').innerHTML = document.getElementById('details-roll-no').value;
    document.getElementById('f-name-out').innerHTML = document.getElementById('details-fname').value.toUpperCase()
    document.getElementById('c-name-out').innerHTML = document.getElementById('details-name').value.toUpperCase();
    let reg;
    reg = Math.floor(Math.random() * (1535000 - 1230000 + 1)) + 1230000;
    document.getElementById('reg-no-out').innerHTML = reg;

    const institute = [
        "Punjab UnGroup of Colleges Islamabad",
        "IMBB College Islamabad",
        "ACPS College Islamabad",
        "OFPF College Islamabad",
        "Bahri Degree College Islamabad",
        "FAG College Islamabad",
        "Square College Islamabad",
        "Islamabad College J-12",
        "PAAF College K-2 Islamabad",
        "Stem College International Islamabad",
        "Allama Iqbal Close University Islamabad (College Section)",
        "F-120 College Islamabad",
        "Margalla Top College Islamabad",
        "H-18 College Islamabad",
        "F-16 College Islamabad",
        "Sky College Islamabad",
        "Navy Foundation College Islamabad"
    ];

    ranIndex = Math.floor(Math.random() * institute.length);
    ranInstitute = institute[ranIndex];

    document.getElementById('institute-out').innerHTML = ranInstitute.toUpperCase();

    let i;
    let totalMarks = 0;
    let remarks;
    let passSub = 0;
    let failSub = 0;
    let pracPerc = 0;
    let pracMarks = 0;
    for (i = 1; i <= 6; i++) {
        marks = Math.floor(Math.random() * (100 - 25 + 1)) + 25;
        document.getElementById('tsub' + i).innerHTML = marks;

        totalMarks = marks + totalMarks;
        if (marks < 40) {
            document.getElementById('tsub' + i).style.backgroundColor = 'rgb(255, 181, 181)';
            document.getElementById('sub' + i).style.backgroundColor = 'rgb(255, 181, 181)';
            document.getElementById('sr' + i).style.backgroundColor = 'rgb(255, 181, 181)';
            document.getElementById('prac' + i).style.backgroundColor = 'rgb(255, 181, 181)';
            failSub += 1;
            if (i == 5) {
                document.getElementById('sub7').style.backgroundColor = 'rgb(255, 181, 181)';
            }
        }



        if (i == 5) {
            pracPerc = marks / 100;
            pracMarks = Math.round(pracPerc * 30);
        }

    }

    totalMarks = totalMarks + pracMarks;
    document.getElementById('prac5').innerHTML = pracMarks;
    document.getElementById('t-marks-out').innerHTML = totalMarks + " / 630";


    passSub = 6 - failSub;
    remarks = "You have passed " + passSub + " subjects but failed " + failSub + ".";
    document.getElementById('remarks-out').innerHTML = remarks;

}

function downloadDivAsImage() {
    const resultDiv = document.getElementById('result-inner');

    document.getElementById('stamp-ceb').style.display = 'flex';
    document.getElementById('result-inner').style.boxShadow = 'none';
    html2canvas(resultDiv).then(canvas => {
        const image = canvas.toDataURL('image/jpeg');
        const link = document.createElement('a');
        link.href = image;
        pdfName = document.getElementById('details-name').value.toUpperCase();

        link.download = pdfName + "'s Result";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    })

    document.getElementById('result-inner').style.boxShadow = '0px 0px 8px rgba(0, 0, 0, 0.4)';
    document.getElementById('stamp-ceb').style.display = 'none';
}

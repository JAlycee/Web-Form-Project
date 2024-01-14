
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); //Prevents the default form submission action

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const website = document.getElementById('website').value;
    const feedback= document.getElementById('feedback').value;

    const output = `
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Feedback:</strong> ${feedback || 'No Feedback'}</p>
    `;
    document.getElementById('formOutput').innerHTML = output;
});

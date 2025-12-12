let editIndex = null;


function loadContacts() {
const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
const container = document.getElementById('contacts');
container.innerHTML = '';


contacts.forEach((c, index) => {
const div = document.createElement('div');
div.className = 'contact';
div.innerHTML = `
<strong>${c.firstName} ${c.lastName}</strong><br>
Телефон: ${c.phone}<br>
Email: ${c.email}<br><br>
<button onclick="editContact(${index})">Редагувати</button>
<button onclick="deleteContact(${index})">Видалити</button>
`;
container.appendChild(div);
});
}


function saveContact() {
const firstName = document.getElementById('firstName').value;
const lastName = document.getElementById('lastName').value;
const phone = document.getElementById('phone').value;
const email = document.getElementById('email').value;


const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');


if (editIndex !== null) {
contacts[editIndex] = { firstName, lastName, phone, email };
editIndex = null;
} else {
contacts.push({ firstName, lastName, phone, email });
}


localStorage.setItem('contacts', JSON.stringify(contacts));
clearForm();
loadContacts();
}


function editContact(index) {
const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
const c = contacts[index];
document.getElementById('firstName').value = c.firstName;
document.getElementById('lastName').value = c.lastName;
document.getElementById('phone').value = c.phone;
document.getElementById('email').value = c.email;
editIndex = index;
}


function deleteContact(index) {
const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
contacts.splice(index, 1);
localStorage.setItem('contacts', JSON.stringify(contacts));
loadContacts();
}


function clearForm() {
document.getElementById('firstName').value = '';
document.getElementById('lastName').value = '';
document.getElementById('phone').value = '';
document.getElementById('email').value = '';
}


document.getElementById('saveBtn').addEventListener('click', saveContact);


loadContacts();
fetch("data.json")
  .then((res) => res.json())
  .then((data) => renderContacts(data.national_contacts))
  .catch(() => {
    document.getElementById("contact-list").innerHTML =
      '<li class="loading">Could not load contact data.</li>';
  });

function renderContacts(contacts) {
  const list = document.getElementById("contact-list");
  list.innerHTML = "";

  contacts.forEach((contact) => {
    const li = document.createElement("li");

    const metaHtml = contact.verified_on
      ? `<span class="contact-meta">Verified ${contact.verified_on} · Source: ${contact.source}</span>`
      : `<span class="contact-meta unverified">Not yet personally verified</span>`;

    li.innerHTML = `
      <span class="contact-name">${contact.name}</span>
      <a class="contact-call" href="tel:${contact.number}">${contact.number}</a>
      ${metaHtml}
    `;
    list.appendChild(li);
  });
}

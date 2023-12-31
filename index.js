const retrieveEntries = () => {
    let entries = localStorage.getItem("user-Entries");
    return entries ? JSON.parse(entries) : [];
  };
  
  let userEntries = retrieveEntries();
  
  const Entries = () => {
    const entries = retrieveEntries();
  
    const tableEntries = entries
        .map(
            (entry) => `<tr>
                <td style = "padding: 2px 4px">${entry.name}</td>
                <td style = "padding: 2px 4px">${entry.email}</td>
                <td style = "padding: 2px 4px">${entry.password}</td>
                <td style = "padding: 2px 4px">${entry.dob}</td>
                <td style = "padding: 2px 4px">${entry.acceptedTermsAndConditions}</td>
            </tr>`
        )
        .join("\n");
  
    const table = `<table>
        
        <tbody>${tableEntries}</tbody>
    </table>`;
  
    let details = document.getElementById("user-entries");
    details.innerHTML = table;
  };
  
  const Form = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const acceptedTermsAndConditions = document.getElementById("Accepted term").checked;
  
    const entry = {
        name,
        email,
        password,
        dob,
        acceptedTermsAndConditions,
    };
  
    userEntries.push(entry);
    localStorage.setItem("user-Entries", JSON.stringify(userEntries));
    Entries();
    userForm.reset();
  };
  
  let userForm = document.getElementById("form");
  userForm.addEventListener("submit", Form);
  
  Entries();
// arrays with the words
let pronoun = ['the', 'our', 'his'];
let adj = ['great', 'big', 'amazing'];
let noun = ['jogger', 'racoon', 'dog', 'merchant', 'driver'];

// generating the domains
function domainGenerator(pronoun, adj, noun) {
  let domains = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        let domain = pronoun[i] + adj[j] + noun[k] + '.com';
        domains.push(domain);
      }
    }
  }
  return domains;
}

// Get the generated domains
let generatedDomains = domainGenerator(pronoun, adj, noun);

// Display the domains in the HTML
let domainsContainer = document.getElementById('domains');
generatedDomains.forEach(domain => {
  let domainElement = document.createElement('p');
  domainElement.textContent = domain;
  domainsContainer.appendChild(domainElement);
});
var posts = [ 
    {
        "title":"Chat GPT, une révolution ?", 
        "text": "ChatGPT est un chatbot développé par OpenAI qui peut simuler une conversation humaine grâce à l'intelligence artificielle GPT-3. Il apprend par apprentissage supervisé en étudiant des millions de pages web et par apprentissage par renforcement en explorant les solutions pour choisir la plus pertinente. Les résultats sont souvent impressionnants et ChatGPT peut produire du langage cohérent et s’adapter en fonction du contexte. Microsoft souhaite l'interfacer avec son moteur de recherche Bing.",
        "link": "https://www.academie-sciences.fr/fr/Communiques-de-presse/intelligence-artificielle-la-revolution-chatgpt.html",
        "link_text": "Académie des sciences",
        "image": "https://major-prepa.com/wp-content/uploads/2023/03/chatgpt.jpg"
    }, 
    {
        "title":"11", "text": "child-of-10"
    }
];

const selector = document.querySelector('div.test');

Object.entries(posts).forEach(val => {
    const [key, value] = val;
    console.log(value.title);
    console.log(value.text);
    selector.innerHTML += `
    <div class="article">
        <h4 class="article-title">${value.title}</h4>
        <div class="article-text"><p>${value.text} </p></div>
        <div class="article-image"><img src="${value.image}"/></div>
        <div class="article-link"><a href="${value.link}" target="_blank">${value.link_text}</a></div>
    </div>
    <div class="separator"></div>
    `
});
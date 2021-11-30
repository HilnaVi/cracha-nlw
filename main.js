const LinksSocialMedia = {
    github:'Hilnavi',
    yotube:'c/MaykBrito',
    facebook:'vitoria.hilna123',
    instagram:'hilnavi',
    twitter:'vitoria_hilna',
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')                    
        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}` 
        
    }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        UserName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()





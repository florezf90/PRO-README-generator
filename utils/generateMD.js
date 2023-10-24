
function generateMD(response) {


  const frameworksList = response.frameworks.map(framework => `* ${framework}`).join('\n');

  console.log(frameworksList)

  if (response.contributing = "default") {

  response.contributing = `If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

    1. Fork the Project
    2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
    3. Commit your Changes (git commit -m 'Add some AmazingFeature')
    4. Push to the Branch (git push origin feature/AmazingFeature)
    5. Open a Pull Request`
    
  } 
  if (response.contributing = "alternative"){

    response.contributing = `
    
If you have a suggestion that would make this better, don't hesitate to reach me out and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

 ✉️ mail: ${response.emailink}

 [![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white)](${response.linkedinlink})


 💿 Demo: ${response.link}


    `
  }


return `
<p><h1 align= "center" id="title">${response.projectname}</h1></p>


<div style="text-align: center;">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white)](${response.linkedinlink})
[![Gmail](https://img.shields.io/badge/Gmail-red?style=for-the-badge&logo=Gmail&logoColor=white)](mailto:${response.emailink})
[![Demo](https://img.shields.io/badge/Demo-Live%20deployment-blue?style=for-the-badge&logo=link&logoColor=blue)](${response.link})


</div>


  # 👩‍💻 About

${response.projectabout}

![Placeholder Image](${response.media})<img>


<details>
  <summary align= "center"> 📊 Table of Contents </summary>
  <ol>
    <li>
      <a href="#about">About The Project</a>
        <li><a href="#built-with">Built With</a></li>
    </li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing-and-contact">Contributing and Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>




---------
# 💲Built With 


${frameworksList}




---------------------------------

# 🚀 Installation 


${response.installation}
 

 -----------------------------
 # 📖 Usage

${response.usage}
-------- 

# 📱 Contributing 

${response.contributing}

----------------
# 🏆 Acknowledgments 

${response.resources}

  * 


-----

 # 🔒🔑 License
 
Distributed under the ${response.license} License. See LICENSE.txt for more information.


## [🔝](#title)

    `    
}

module.exports = generateMD;





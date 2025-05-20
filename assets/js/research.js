/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Automated Objective-Type Question Generation: A ML Model for Diverse Assessments",
    conferences:
      "TIJER Journal",
    researchYr: 2024,
    citebox: "popup1",
    image: "assets/images/mcq.png",
    citation: {
      vancouver:
        "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract: `
- This machine learning model aims to automate the generation of various objective-type questions, such as multiple-choice questions (MCQs), True/Yes or False/No questions, Assertion and Reasoning questions, and fill-in-the-blank questions, based on given input text and subsequently organize them into a CSV file.

The working of creating a model that is focused upon the generation of MCQs, which is now working efficiently. The process takes input text to extract relevant information for question generation. The model utilizes the OpenAI library along with tools such as JSON, re, and CSV for processing and manipulation of data.

Key functionalities include handling CSV files, converting responses into a structured format, and generating MCQs while considering Bloom's Taxonomy levels. The generated questions are then stored in a JSON format and subsequently converted to CSV files.

Overall, this tool streamlines the process of generating objective-type questions from text input, facilitating educational content creation and assessment, and can also be integrated into existing e-learning platforms that are available in the market.
`,

  absbox: "absPopup1",
  paperLink: "assets/TIJER2408008.pdf",  // <== NEW field
    absbox: "absPopup1",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
      paperLink,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        
                    </div>
                    <div class="d-flex" style="margin-top: 10px;">
    <a href="${paperLink}" target="_blank" class="button button-accent button-small text-right button-abstract">
        VIEW PAPER
    </a>
</div>

                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);

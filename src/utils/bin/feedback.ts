import axios from "axios"

export const feedback = async (args?: string[]): Promise<string> => {
    let first_arg = args[0]
    if(first_arg === "-s" || first_arg === "--submit"){
        let next_arg = args[1]
        if(next_arg === undefined){
            return usageInstruction()
        }
        else{
            // validate as string
            submitFeedback(next_arg)
        }
    }
    return `
I'd love to hear your feedback. Please feel free to reach out to me on LinkedIn or email. I'm always open to new ideas and suggestions.
  
Curently working on allowing users to submit feedback directly from the terminal. Stay tuned!
    `
}

const submitFeedback = async (feedback: string) => {
    try {
      // Submit feedback to database
      const response = await axios.post("http://localhost:3000/api/submit-feedback", {
        feedback
      });
  
      if (response.status === 201) {
        // Optionally, send email to the developer here
        // You can use an emailing service like SendGrid, Nodemailer, etc.
        
        // Return a confirmation message
        return `
  Thank you for your feedback! I'll be sure to take it into consideration.
        `;
      } else {
        return `
  Oops! Something went wrong. Please try again later.
        `;
      }
    } catch (error) {
      return `
  Oops! An error occurred while submitting your feedback. Please try again later.
      `;
    }
  };

const usageInstruction = () => `
Command to give feedback to the developer.
  
usage: feedback [args]
args:
    -s, --submit: submit feedback directly from the terminal
    `;

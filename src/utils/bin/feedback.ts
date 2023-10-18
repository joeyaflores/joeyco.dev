import axios from "axios"

export const feedback = async (args?: string[]): Promise<string> => {
  if (args?.length) {
    const joinedArgs = args.join(' ');
    const match = joinedArgs.match(/--\w+\s+"([^"]+)"/);
    if (match) {
        const argType = match[0].split(' ')[0]; // e.g. --bug, --feature, --ui
        const feedbackText = match[1]; // e.g. "I found a bug in the program"
        if (['--bug', '--feature', '--ui', '--other'].includes(argType)) {
            return await submitFeedback(argType, feedbackText);
        }
    }
}
return usageInstruction();
}

const submitFeedback = async (feedbackType: string, description: string): Promise<string> => {
  description = description.trim();

  if (description === undefined || description.length < 1) {
    return `
Please provide a description of your feedback.
    `;
  }
  if (description.length > 280) {
    return `
Please limit your feedback to 280 characters. Basically, a tweet.
    `;
  }
  if (description.length < 10) {
    return `
Please provide a more detailed description of your feedback.
    `;
  }
  switch (feedbackType) {
    case "--bug":
      return await sendFeedback(description, feedbackType);
    case "--feature":
      return await sendFeedback(description, feedbackType);
    case "--ui":
      return await sendFeedback(description, feedbackType);
    case "--other":
      return await sendFeedback(description, feedbackType);
    default:
      return `
Please provide a valid feedback type.
      `;
  }
};

const sendFeedback = async (description: string, feedback_type: string): Promise<string> => {
  try {
    const response = await axios.post("https://www.joeyco.dev/api/submit-feedback", {
      description, feedback_type
    });
    if (response.status === 200) {
      // Setup email to send to myself
      return `
Feedback submitted successfully. Thank you! 🤝
      `;
    }
  } catch (error) {
    return `
Oops! An error occurred while submitting your feedback. Please try again.
    `;
  }
}

const usageInstruction = () => `
Command to give feedback. Roast me, please.
  
usage: feedback [args] [feedback]

args:
    --bug [bug description]
    --feature [feature description]
    --ui [ui description]
    
feedback:
    Text describing the feedback. Must be in quotation marks.

Examples:
    feedback --bug "I found a bug in the program" (include any contact info, if desired)
    `;

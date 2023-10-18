import type { NextApiRequest, NextApiResponse } from 'next';
import { bug, feature, ui } from '../../../lib/feedback';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let data = req.body;
  let description = data.description;
  let feedback_type = data.feedback_type.replace('--', '');
  
 if (feedback_type === 'bug') {
    try {
      const result = await bug(description, feedback_type);
      return res.status(200).json(result);
    } catch (e: any) {
      return res.status(500).json({
        error: e.toString()
      });
    }
  }
  if (feedback_type === 'feature') {
    try {
      const result = await feature(description, feedback_type);
      return res.status(200).json(result);
    } catch (e: any) {
      return res.status(500).json({
        error: e.toString()
      });
    }
  }
  if (feedback_type === 'ui') {
    try {
      const result = await ui(description, feedback_type);
      return res.status(200).json(result);
    } catch (e: any) {
      return res.status(500).json({
        error: e.toString()
      });
    }
  }

}

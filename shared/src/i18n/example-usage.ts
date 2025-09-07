import type { Request, Response } from 'express';
import { i18n, createTypedTFunction } from '../i18n/helpers';

// Example controller that uses the type-safe translations
export const exampleController = (req: Request, res: Response) => {
  // Get the typed t function
  const t = createTypedTFunction(req.t);
  
  // Now you'll get autocomplete for translation keys
  const greeting = t('greeting');
  const userNotFound = t('user.not_found');
  const welcomeMessage = t('welcome', { appName: 'My App' });
  
  res.json({
    greeting,
    userNotFound,
    welcomeMessage
  });
};

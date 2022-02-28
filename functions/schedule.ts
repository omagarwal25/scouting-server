import type { Game, Schedule } from '../models/schedule';
import type { Handler } from '@netlify/functions';
import fetch from 'node-fetch';

export const handler: Handler = async (event, context) => {
  const frcEvent = event.queryStringParameters['event'];
  const type = event.queryStringParameters['type'];

  if (!frcEvent || !type) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Invalid Params, Event Code or Match Type not given.',
      }),
    };
  }

  const res = await fetch(
    `https://frc-api.firstinspires.org/v3.0/${new Date().getFullYear()}}/schedule/${frcEvent}??tournamentLevel=${type}`,
    {
      headers: { Authorization: `Basic ${process.env.NETLIFY_FRC_API_KEY}` },
      method: 'GET',
    }
  );

  const data: Game[] = ((await res.json()) as Schedule).Schedule;

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

import { NextResponse } from 'next/server';
import axios from 'axios';

const fallbackQuote = {
  quote: 'Success is the sum of small efforts, repeated day in and day out.',
  author: 'Robert Collier',
};

export async function GET() {
  try {
    const response = await axios.get('https://quotes.rest/qod', {
      timeout: 5000,
    });

    const quote = response?.data?.contents?.quotes?.[0] ?? fallbackQuote;
    return NextResponse.json({ quote });
  } catch (error) {
    console.warn('Error fetching the quote, using fallback quote instead:', error.message);
    return NextResponse.json({ quote: fallbackQuote });
  }
}
export async function POST(request) {
  try {
    const { to, message } = await request.json();

    const body = new URLSearchParams({
      username: 'kipkorir',
      to,
      message,
    });

    const response = await fetch(
      "https://api.africastalking.com/version1/messaging",
      {
        method: "POST",
        headers: {
          apiKey: 'atsk_d2f25780f64543f3e0fb2d2a7c366c151e587a8e8253fc4851bf09df28c56f4f70346e3c',
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body,
      }
    );

    const data = await response.json();

    return Response.json(data, { status: response.status });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}

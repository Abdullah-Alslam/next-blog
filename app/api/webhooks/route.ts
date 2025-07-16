import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  console.log("Webhook received:", body);

  // مثال: لو حدث إنشاء مستخدم جديد
  if (body.type === "user.created") {
    const user = body.data;
    // هنا تقدر تحفظ بيانات المستخدم في قاعدة بياناتك
    console.log("New user ID:", user.id);
    console.log("User email:", user.email_addresses[0]?.email_address);
  }

    if (evt.type === 'user.created') {
  console.log('userId:', evt.data.id)
}
  return NextResponse.json({ status: "ok" });
}

import { NextRequest , NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const {name,email,phone,subject,message} = data;
 const [result] = await db.query(
      "INSERT INTO users (name, email, phone,  subject,message) VALUES (?, ?, ?, ?, ?)",
      [name, email, phone, subject ,message]
    );
  return NextResponse.json({ message: "Form submitted successfully!" });
}


export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM users"); 
    console.log(rows);
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}

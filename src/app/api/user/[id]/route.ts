import { NextResponse } from "next/server";
import {db} from "@/lib/db";  // MySQL connection file

// GET user by ID
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
    console.log( "Fetching user with ID:", id);

  try {
    const [rows]: any = await db.query("SELECT * FROM users WHERE id = ?", [id]);

    if (rows.length === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(rows[0]); // ek user return karega
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

// UPDATE user by ID
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const { name, email, phone } = await req.json();

  try {
    const [result]: any = await db.query(
      "UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?",
      [name, email, phone, id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

// DELETE user by ID
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const [result]: any = await db.query("DELETE FROM users WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

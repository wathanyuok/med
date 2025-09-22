import { format } from "date-fns";
import { th } from "date-fns/locale";

// 2024-12-19 --> "19 ธันวาคม 2567"
export function formatThaiDate(dateString: string): string {
  if (!dateString) return "";

  const date = new Date(dateString);

  // คำนวณปี พ.ศ.
  const buddhistYear = date.getFullYear() + 543;

  // ใช้ date-fns format แสดง วัน เดือน (ไทย) แล้วแทนปีเอง
  const dayMonth = format(date, "d MMMM", { locale: th });

  return `${dayMonth} ${buddhistYear}`;
}

export function formatDate(date: Date | undefined ) {
  if (!date) return ""

  const buddhistYear = date.getFullYear() + 543

  return date
    .toLocaleDateString("th-TH", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
    .replace(String(date.getFullYear()), String(buddhistYear))
}

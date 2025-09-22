import { formatDate, formatThaiDate } from "@/app/utils/formatDate";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionItemData {
  id: number;
  title: string;
  date: string;
  total: number;
  receipt: string;
}

interface AccordionAppProps {
  items: AccordionItemData[];
}

export function AccordionApp({ items }: AccordionAppProps) {
  return (
    <Accordion type="single" collapsible className="w-full bg-white rounded-xl p-4 pb-6 shadow" defaultValue={items[0]?.id.toString()}>
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id.toString()} className="">
          <AccordionTrigger className="hover:no-underline no-underline">
            <div className="text-left">
              <p className="text-base sm:text-lg md:text-xl font-medium">{item.title}</p>
              <p className="no-underline text-neutral-500 text-sm sm:text-base">{formatThaiDate(item.date)}</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-sm sm:text-base md:text-lg">
            <div className="grid grid-cols-2">
              <p>ยอดรวม</p>
              <p>{item.total.toLocaleString()} บาท</p>
            </div>
            <div className="grid grid-cols-2">
              <p>ใบเสร็จรับเงิน</p>
              <p className=" text-bright-blue">
                {item.receipt}
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

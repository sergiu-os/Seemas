import { useMemo, useState } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  canChangeMonth,
  canChangeYear,
  changeMonth,
  changeYear,
  formatMonthShort,
  formatYear,
  generateMonths,
  generateYears,
} from "@/lib/date-fns/dateHelpers";
import { cn } from "@/lib/utils";

import { CalendarSelectEnum } from "../calendar.types";
import CalendarCell from "./cell";
import CalendarSelect from "./select";

interface CalendarHeaderProps {
  displayMonth: Date;
}

const CalendarHeader = ({ displayMonth }: CalendarHeaderProps) => {
  const [isOpen, setIsOpen] = useState<CalendarSelectEnum | null>(null);
  const [displayedMonth, setDisplayedMonth] = useState<Date>(displayMonth);

  const currentYear = new Date().getFullYear();
  const showYears = isOpen === CalendarSelectEnum.Year;
  const showMonths = isOpen === CalendarSelectEnum.Month;

  const isLeftMonthArrowDisabled = useMemo(
    () => !canChangeMonth(displayedMonth, "backward"),
    [displayedMonth]
  );
  const isRightMonthArrowDisabled = useMemo(
    () => !canChangeMonth(displayedMonth, "forward"),
    [displayedMonth]
  );

  const isLeftYearArrowDisabled = useMemo(
    () => !canChangeYear(displayedMonth, "backward"),
    [displayedMonth]
  );
  const isRightYearArrowDisabled = useMemo(
    () => !canChangeYear(displayedMonth, "forward"),
    [displayedMonth]
  );

  const startYear = useMemo(
    () => currentYear - 20,
    [currentYear]
  );
  const endYear = useMemo(
    () => currentYear + 20,
    [currentYear]
  );

  const months = useMemo(
    () =>
      generateMonths(
        displayedMonth.getFullYear(),
        displayedMonth
      ),
    [displayedMonth]
  );

  const years = useMemo(
    () => generateYears(startYear, endYear, displayedMonth),
    [displayedMonth, endYear, startYear]
  );

  const showData = showYears ? years : showMonths ? months : [];

  return (
    <div className={cn("h-11 border-b border-gray-200 flex gap-4")}>
      <CalendarSelect
        onClick={() =>
          setIsOpen(prev =>
            prev === CalendarSelectEnum.Month ? null : CalendarSelectEnum.Month
          )
        }
        isOpen={showMonths}
        text={formatMonthShort(displayedMonth)}
        onLeftArrowClick={() => setDisplayedMonth(changeMonth(displayedMonth, "backward"))}
        onRightArrowClick={() => setDisplayedMonth(changeMonth(displayedMonth, "forward"))}
        isLeftBtnDisabled={isLeftMonthArrowDisabled}
        isRightBtnDisabled={isRightMonthArrowDisabled}
      />
      <CalendarSelect
        onClick={() =>
          setIsOpen(prev =>
            prev === CalendarSelectEnum.Year ? null : CalendarSelectEnum.Year
          )
        }
        isOpen={showYears}
        text={formatYear(displayedMonth)}
        onLeftArrowClick={() => setDisplayedMonth(changeYear(displayedMonth, "backward"))}
        onRightArrowClick={() => setDisplayedMonth(changeYear(displayedMonth, "forward"))}
        isLeftBtnDisabled={isLeftYearArrowDisabled}
        isRightBtnDisabled={isRightYearArrowDisabled}
      />

      <div
        className={cn(
          isOpen
            ? "bg-white absolute top-14 left-0 bottom-0 right-0 z-10 flex flex-col"
            : "hidden"
        )}
      >
        <ScrollArea className="[&_.vertical-scrollbar]:px-1 [&_.vertical-scrollbar]:w-4">
          <div
            className={cn("grid grid-cols-2 gap-1", showYears ? "pr-6" : "")}
            style={{
              gridTemplateColumns: `repeat(${
                showYears ? 3 : 2
              }, minmax(0, 1fr))`,
            }}
          >
            {showData.map((item, index) => {
              return (
                <CalendarCell
                  key={`${item.name}_${index}`}
                  text={item.name}
                  onClick={() => {
                    setDisplayedMonth(item.goToDateValue);
                    setIsOpen(null);
                  }}
                  {...item}
                />
              );
            })}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default CalendarHeader;

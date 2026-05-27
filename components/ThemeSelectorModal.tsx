import { useEffect, useMemo, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/modal";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { themes, Theme } from "@/config/themes";

interface ThemeSelectorModalProps {
  open: boolean;
  onSelect: (theme: Theme) => void;
}

// Local-time YYYY-MM-DD so an event in Toronto reads as "today" while the
// user is in Toronto, regardless of UTC offset.
function todayIsoLocal(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export default function ThemeSelectorModal({ open, onSelect }: ThemeSelectorModalProps) {
  const [selected, setSelected] = useState<Theme | null>(null);
  const today = useMemo(() => todayIsoLocal(), []);

  useEffect(() => {
    if (selected) {
      onSelect(selected);
    }
  }, [selected]);

  return (
    <Modal
      isOpen={open}
      hideCloseButton
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      placement="center"
      size="xl"
      classNames={{
        base: "max-h-[80vh] max-w-[70vw] md:max-w-[60vw]",
        header: "border-b border-divider flex-shrink-0",
        body: "py-4 px-0 overflow-y-auto"
      }}
    >
      <ModalContent className="overflow-hidden">
        <ModalHeader className="flex flex-col gap-1 px-6">
          <h2 className="text-2xl font-bold text-foreground">Choose Your Theme</h2>
          <p className="text-sm text-foreground-500">Select a theme to personalize your poem experience</p>
        </ModalHeader>
        <ModalBody className="px-6 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
            {themes.map((theme) => (
              <Card
                key={theme.id}
                isPressable
                isHoverable
                className={`transition-all duration-200 cursor-pointer w-full ${
                  selected?.id === theme.id 
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-[1.02]" 
                    : "hover:scale-[1.01]"
                }`}
                onPress={() => setSelected(theme)}
              >
                <CardBody className="p-0 overflow-hidden">
                  <div className="relative h-32 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${theme.imagePath})` }}>
                    {/* Background overlay for better visibility */}
                    <div className="absolute inset-0 bg-black/10"></div>

                    {/* Event date banner — only for themes tied to a calendar date */}
                    {theme.eventDate && (
                      <div className="absolute top-0 left-0 right-0 z-20 bg-white/90 backdrop-blur-sm px-2 py-1 text-center border-b border-black/10">
                        <div className="text-[11px] font-bold tracking-wide text-rose-900 leading-tight">
                          {theme.eventDate.display}
                        </div>
                        <div className="text-[9px] font-medium text-rose-900/80 leading-tight">
                          {theme.eventDate.time}
                        </div>
                      </div>
                    )}

                    {/* TODAY pill — shows when today's local date matches the event date */}
                    {theme.eventDate?.iso === today && (
                      <div className="absolute top-1 left-1 z-30 bg-red-600 text-white text-[9px] font-bold tracking-widest px-2 py-0.5 rounded-full shadow-md ring-2 ring-white">
                        TODAY
                      </div>
                    )}

                    {/* Day-of-month badge */}
                    {theme.eventDate && (
                      <div className="absolute bottom-1 right-1 z-20 w-10 h-10 bg-black/85 rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-white text-lg font-bold leading-none">
                          {theme.eventDate.day}
                        </span>
                      </div>
                    )}

                    {/* Mini preview layout */}

                    {/* Top center decorations area */}
                    <div className={`absolute ${theme.eventDate ? "top-10" : "top-2"} left-1/2 transform -translate-x-1/2 flex gap-2 z-10`}>
                      {theme.leftLeft && (
                        <img
                          src={theme.leftLeft}
                          alt="Left left decoration"
                          className="w-8 h-8 object-contain"
                        />
                      )}
                      {theme.imageDecorationsOnTop?.left && (
                        <img
                          src={theme.imageDecorationsOnTop.left}
                          alt="Left decoration"
                          className="w-10 h-10 object-contain"
                        />
                      )}
                      {theme.imageDecorationsOnTop?.center && (
                        <img
                          src={theme.imageDecorationsOnTop.center}
                          alt="Center decoration"
                          className="w-10 h-10 object-contain"
                        />
                      )}
                      {theme.imageDecorationsOnTop?.right && (
                        <img
                          src={theme.imageDecorationsOnTop.right}
                          alt="Right decoration"
                          className="w-10 h-10 object-contain"
                        />
                      )}
                      {theme.rightRight && (
                        <img
                          src={theme.rightRight}
                          alt="Right right decoration"
                          className="w-8 h-8 object-contain"
                        />
                      )}
                    </div>

                    {/* imageDecoration1 in bottom right — hidden when the day
                        badge occupies that slot for dated events */}
                    {theme.imageDecoration1 && !theme.eventDate && (
                      <div className="absolute bottom-2 right-2 z-10">
                        <img
                          src={theme.imageDecoration1}
                          alt="Bottom decoration"
                          className="w-16 h-16 object-contain rotate-12"
                        />
                      </div>
                    )}

                    {/* Theme name overlay */}
                    <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs font-medium">
                      Preview
                    </div>

                    {selected?.id === theme.id && (
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-1.5 shadow-lg z-20">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground text-base leading-snug mb-2 line-clamp-2">
                      {theme.name}
                    </h3>
                    <p className="text-xs text-foreground-500 line-clamp-3 leading-relaxed">
                      {theme.description}
                    </p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
          {selected && (
            <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20 w-full">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <p className="text-sm text-foreground truncate">
                  <span className="font-medium">Selected:</span> {selected.name}
                </p>
              </div>
            </div>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
} 
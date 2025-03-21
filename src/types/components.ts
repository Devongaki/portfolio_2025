export interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface FloatingIconProps {
  position: {
    x: number;
    y: number;
    z: number;
  };
  rotation: {
    x: number;
    y: number;
    z: number;
  };
  scale: number;
  icon: string;
}

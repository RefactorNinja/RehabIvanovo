type RecoveryStepItemProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

export function RecoveryStepItem({ label, active, onClick }: RecoveryStepItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border px-4 py-3 text-left transition ${
        active ? "border-sky-300 bg-sky-50 text-slate-900" : "border-slate-200 bg-white text-slate-700"
      }`}
    >
      {label}
    </button>
  );
}

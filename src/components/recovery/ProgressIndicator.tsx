type ProgressIndicatorProps = {
  current: number;
  total: number;
};

export function ProgressIndicator({ current, total }: ProgressIndicatorProps) {
  return (
    <div className="mb-4 text-sm text-slate-600">
      Шаг {current + 1} из {total}
    </div>
  );
}

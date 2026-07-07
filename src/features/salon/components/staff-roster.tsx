import { Scissors } from "lucide-react";
import { staffMembers } from "@/data/salon";

export function StaffRoster() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {staffMembers.map((staff) => (
        <article
          key={staff.id}
          className="rounded-lg border border-line bg-white p-5 shadow-sm"
        >
          <div className="flex size-12 items-center justify-center rounded-md bg-ink text-white">
            <Scissors className="size-5" aria-hidden="true" />
          </div>
          <p className="mt-4 text-lg font-extrabold uppercase text-ink">
            {staff.name}
          </p>
          <p className="text-sm font-bold text-zinc-700">{staff.role}</p>
          <p className="mt-3 text-sm leading-6 text-zinc-700">{staff.bio}</p>
        </article>
      ))}
    </div>
  );
}

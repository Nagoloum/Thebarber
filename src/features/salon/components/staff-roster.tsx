import { Scissors } from "lucide-react";
import { staffMembers } from "@/data/salon";

export function StaffRoster() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {staffMembers.map((staff) => (
        <article
          key={staff.id}
          className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
        >
          <div className="flex size-12 items-center justify-center rounded-md bg-muted text-accent">
            <Scissors className="size-5" aria-hidden="true" />
          </div>
          <p className="mt-4 text-lg font-semibold text-zinc-950">{staff.name}</p>
          <p className="text-sm font-medium text-accent">{staff.role}</p>
          <p className="mt-3 text-sm leading-6 text-zinc-600">{staff.bio}</p>
        </article>
      ))}
    </div>
  );
}

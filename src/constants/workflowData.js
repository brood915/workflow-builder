// src/constants/workflowData.js
import {
  Key,
  Building2,
  FileText,
  Workflow,
  Globe,
  Server,
  Layers,
  Flag,
  Mail,
  UserPlus,
  Bell,
  Calendar,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────
   FIRST half of the Criteria step – “What will this workflow be based on?”
   ──────────────────────────────────────────────────────────── */
export const baseOptions = [
  { id: "company",     name: "Company",     icon: Building2 },
  { id: "record",      name: "Record",      icon: FileText },
  { id: "website",     name: "Website",     icon: Globe },
  { id: "expiration",  name: "Expiration",  icon: Calendar },
  { id: "user",        name: "User",        icon: UserPlus },
  { id: "group",       name: "Group",       icon: Layers },
  { id: "integration", name: "Integration", icon: Server },
];

/* ────────────────────────────────────────────────────────────
   SECOND half of the Criteria step – record-type check-list
   ──────────────────────────────────────────────────────────── */
export const recordTypes = [
  { id: "password",     name: "Password",           icon: Key },
  { id: "company-kb",   name: "Company KB article", icon: Building2 },
  { id: "central-kb",   name: "Central KB article", icon: FileText },
  { id: "process",      name: "Process",            icon: Workflow },
  { id: "website",      name: "Website",            icon: Globe },
  { id: "rack",         name: "Rack",               icon: Server },
  { id: "network",      name: "Network",            icon: Layers },
  { id: "asset",        name: "Asset",              icon: Building2 },
];

export const triggers = [
  { id: "record-created",  name: "Record created",  description: "When a new record is created" },
  { id: "record-updated",  name: "Record updated",  description: "When a record is modified" },
  { id: "record-deleted",  name: "Record deleted",  description: "When a record is removed"   },
  { id: "record-accessed", name: "Record accessed", description: "When a record is viewed"    },
];

export const actions = [
  { id: "add-flag",          name: "Add flag",           description: "Add a flag to the record",  icon: Flag },
  { id: "send-email",        name: "Send email",         description: "Send an email notification", icon: Mail },
  { id: "assign-user",       name: "Assign user",        description: "Assign a user to the record", icon: UserPlus },
  { id: "create-notification", name: "Create notification", description: "Create a system notification", icon: Bell },
  { id: "generate-report",   name: "Generate report",    description: "Generate an automated report", icon: FileText },
  { id: "schedule-task",     name: "Schedule task",      description: "Schedule a follow-up task",  icon: Calendar },
];

export const steps = [
  { id: 1, name: "Criteria", description: "Select criteria" },
  { id: 2, name: "Trigger",  description: "Define trigger"  },
  { id: 3, name: "Action",   description: "Choose action"   },
  { id: 4, name: "Review",   description: "Review summary"  },
];

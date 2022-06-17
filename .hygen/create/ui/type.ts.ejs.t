---
to: "<%= have_type ? `${abs_path}/type.ts` : null %>"
---

export interface Props {}

<% if (have_hook) { -%>
export interface Use<%= component_name %> {}
<% } -%>

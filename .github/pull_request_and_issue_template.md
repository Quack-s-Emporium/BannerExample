# Shared Template for Issues and Pull Requests

## Shared Section
[This section is common to both issues and pull requests]

{{#if issue}}
## Issue Section
[This section is specific to issues]
{{/if}}

{{#unless issue}}
## Pull Request Section
[This section is specific to pull requests]
{{/unless}}

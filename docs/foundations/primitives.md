# Primitivas Iniciales

Este primer lote establece la base visual de Nightcall UI para los próximos componentes.

## Color

Fuente de verdad: `tokens/color.json`

- Paleta oficial Nightcall UI: background, surface, surfaceSecondary, primary, secondary, info, warning y text.
- Tokens semánticos: background, text, border, accent, state.
- Objetivo: separar el color de marca (primitivo) del color de uso (semántico).

## Tipografia

Fuente de verdad: `tokens/typography.json`

- Familias:
  - Heading: Michroma
  - Body: Inter
  - Code: IBM Plex Mono
- Escalas incluidas:
  - Peso (`font.weight`)
  - Tamaño (`font.size`)
  - Interlineado (`font.lineHeight`)
  - Tracking (`font.letterSpacing`)

## Spacing

Fuente de verdad: `tokens/spacing.json`

- Escala base desde `space.0` hasta `space.24`.
- Tokens para componentes:
  - `component.paddingInline.*`
  - `component.paddingBlock.*`
  - `component.gap.*`

## Layout

Fuente de verdad: `tokens/layout.json`

- Breakpoints: `layout.breakpoint.*`
- Anchos de contenedor: `layout.container.*`
- Grid base:
  - Columnas (`layout.grid.columns.*`)
  - Gutter (`layout.grid.gutter.*`)
  - Min/max para tarjetas (`layout.grid.card.*`)
- Espaciado de secciones: `layout.section.spacing.*`

## Elevation

Fuentes de verdad:

- `tokens/elevation.json`
- `tokens/shadow.json`
- `tokens/zindex.json`

Incluye:

- Superficies por nivel (`elevation.surface.*`)
- Sombras por nivel (`elevation.shadow.*`)
- Bordes por nivel (`elevation.border.*`)
- Focus/accent rings (`elevation.ring.*`)
- Layers z-index (`layer.*` y `zIndex.*`)

## Consumo

- Generación de tokens: `npm run tokens`
- Tema Nightcall (alias semánticos): `packages/themes/src/_nightcall.scss`
- La app de docs consume variables semánticas para validar la base visual sin componentes aún.

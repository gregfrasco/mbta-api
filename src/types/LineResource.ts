/**
 * Line represents a combination of routes
 */
export class LineResource {
    /**
     * This field can be used to specify a legible color to use for text drawn against a background of line_color. The color must be provided as a six-character hexadecimal number, for example, FFD700.
     */
    text_color: string;

    /**
     * Lines sort in ascending order
     */
    sort_order: number;

    /**
     * Short, public-facing name for the group of routes represented in this line
     */
    short_name: string;

    /**
     * Lengthier, public-facing name for the group of routes represented in this line
     */
    long_name: string;

    /**
     * In systems that have colors assigned to lines, the route_color field defines a color that corresponds to a line. The color must be provided as a six-character hexadecimal number, for example, 00FFFF.
     */
    color: string
}

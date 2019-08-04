/**
 * Line represents a combination of routes
 */
export class Line {
    /**
     * This field can be used to specify a legible color to use for text drawn against a background of line_color. The color must be provided as a six-character hexadecimal number, for example, 'FFD700'.

     */
    textColor: string;

    /**
     * Lines sort in ascending order
     */
    sortOrder: number;

    /**
     * Short, public-facing name for the group of routes represented in this line

     */
    shortName: string;

    /**
     * Lengthier, public-facing name for the group of routes represented in this line

     */
    longName: string;

    /**
     * In systems that have colors assigned to lines, the route_color field defines a color that corresponds to a line. The color must be provided as a six-character hexadecimal number, for example, '00FFFF'.

     */
    color: string;

}
/**
 * @description Get responsive dialog width with 90% width for mobile devices
 * @date 10/04/2023 - 11:51:45
 *
 * @export
 * @param {string} width
 * @returns {string}
 */
export function responsiveDialogWidth(width: string): string {
    return window.innerWidth < 768 ? '90%' : width;
  }
export default function banDefault(event: any) {
  event.preventDefault();
  event.stopPropagation();
  return false;
}

import {
  AlertDialog,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogDescription,
} from "@/components/alert-dialog";
import { Button } from "@/components/button";

export function Basic() {
  return (
    <AlertDialog trigger={<Button variant="critical">Delete Item</Button>}>
      <AlertDialogHeader>Are you sure?</AlertDialogHeader>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete the item.
      </AlertDialogDescription>
      <AlertDialogFooter>
        <Button variant="secondary">Cancel</Button>
        <Button variant="critical">Delete</Button>
      </AlertDialogFooter>
    </AlertDialog>
  );
}

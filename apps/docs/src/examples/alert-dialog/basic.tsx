import {
  AlertDialog,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogDescription,
  AlertDialogCancelButton,
  AlertDialogActionButton,
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
        <AlertDialogCancelButton variant="secondary">
          Cancel
        </AlertDialogCancelButton>
        <AlertDialogActionButton variant="critical">
          Delete
        </AlertDialogActionButton>
      </AlertDialogFooter>
    </AlertDialog>
  );
}

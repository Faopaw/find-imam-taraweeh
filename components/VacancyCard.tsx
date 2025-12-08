"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { VacancyCardProps } from "../types";

function VacancyCard(props: VacancyCardProps) {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="w-full max-w-sm border-l-4 border-l-primary">
        <CardHeader>
          <CardTitle className="text-lg">
            {props.requireddata.fields.masjid["en-US"]},{" "}
            {props.requireddata.fields.city["en-US"]}
          </CardTitle>
          <CardDescription>
            {props.requireddata.fields.address?.["en-US"]}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <span className="text-sm text-muted-foreground">
              {props.requireddata.fields.requirements?.["en-US"]}
            </span>

            <div className="flex items-center gap-2 text-sm mt-2">
              <span className="font-medium">
                {props.requireddata.fields.contactName?.["en-US"]}
              </span>
              <span className="text-muted-foreground">-</span>
              <span className="text-muted-foreground">
                <a
                  href={`tel:${props.requireddata.fields.contactMobileNumber?.["en-US"]}`}
                >
                  {props.requireddata.fields.contactMobileNumber?.["en-US"]}
                </a>
              </span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            aria-label="detailsbutton"
            onClick={handleShow}
            className="w-full"
            variant="secondary"
          >
            More Details
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={show} onOpenChange={setShow}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>More Details</DialogTitle>
            <DialogDescription>
              Additional information about this vacancy
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <strong className="text-sm font-semibold">Masjid Name:</strong>
              <p className="text-sm text-muted-foreground mt-1">
                {props.requireddata.fields.masjid?.["en-US"]}
              </p>
            </div>
            <div>
              <strong className="text-sm font-semibold">Address:</strong>
              <p className="text-sm text-muted-foreground mt-1">
                {props.requireddata.fields.address?.["en-US"]}
              </p>
            </div>
            <div>
              <strong className="text-sm font-semibold">Details:</strong>
              <p className="text-sm text-muted-foreground mt-1">
                {props.requireddata.fields.details?.["en-US"]}
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={handleClose}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default VacancyCard;

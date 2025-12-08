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
      <Card className="w-full max-w-sm border-l-4 border-l-primary h-full">
        <CardHeader>
          <CardTitle className="text-lg">
            {props.requireddata.fields.masjid["en-US"]}
          </CardTitle>
          <CardDescription>
            {props.requireddata.fields.city["en-US"]}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <span className="text-sm text-muted-foreground">
              {props.requireddata.fields.requirements?.["en-US"].substring(
                0,
                100
              )}
              ...
            </span>
            <address className="text-sm text-muted-foreground block pt-2">
              {/* eg: 298 Park Road, Loughborough, LE11 2HL, Leicestershire becomes: https://www.google.com/maps/search/?api=1&query=298%20Park%20Road%2C%20Loughborough%2C%20LE11%202HL%2C%20Leicestershire */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(props.requireddata.fields.address?.["en-US"])}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-sm hover:text-blue-700 underline"
              >
                {props.requireddata.fields.address?.["en-US"]}
              </a>
            </address>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            aria-label="detailsbutton"
            onClick={handleShow}
            className="w-full "
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

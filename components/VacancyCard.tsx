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

  const masjid = props.requireddata.fields.masjid;
  const city = props.requireddata.fields.city;
  const requirements = props.requireddata.fields.requirements;
  const address = props.requireddata.fields.address;
  const details = props.requireddata.fields.details;


  return (
    <>
      <Card className="w-full max-w-sm border-l-4 border-l-primary h-full">
        <CardHeader>
          <CardTitle className="text-lg">{masjid}</CardTitle>
          <CardDescription>{city}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {requirements && (
              <span className="text-sm text-muted-foreground">
                {requirements.substring(0, 100)}...
              </span>
            )}
            {address && (
              <address className="text-sm text-muted-foreground block pt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-sm hover:text-blue-700 underline"
                >
                  {address}
                </a>
              </address>
            )}
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
              <p className="text-sm text-muted-foreground mt-1">{masjid}</p>
            </div>
            <div>
              <strong className="text-sm font-semibold">Address:</strong>
              <p className="text-sm text-muted-foreground mt-1">{address}</p>
            </div>
            <div>
              <strong className="text-sm font-semibold">Details:</strong>
              <p className="text-sm text-muted-foreground mt-1">{details}</p>
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

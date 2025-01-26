###############################################################################
# 1) Define the snapshot schedule resource policy
###############################################################################
resource "google_compute_resource_policy" "mongodb_backup_policy" {
  name   = "mongodb-backup-policy"
  region = "us-east1"             # region for daily snapshots
  project = "rickmorty-search"

  snapshot_schedule_policy {
    schedule {
      daily_schedule {
        days_in_cycle = 1
        start_time    = "04:00"
      }
    }

    retention_policy {
      max_retention_days    = 7
      on_source_disk_delete = "KEEP_AUTO_SNAPSHOTS"
    }

    snapshot_properties {
      labels = {
        created_by = "terraform"
      }
    }
  }
}

###############################################################################
# 2) Attach the policy to the disk using ONLY the policy’s short name
###############################################################################
resource "google_compute_disk_resource_policy_attachment" "mongodb_policy_attachment" {
  # The "name" attribute must be the short name or a properly formatted link.
  # If you use the short name, the provider will construct the correct link internally.
  name    = google_compute_resource_policy.mongodb_backup_policy.name
  disk    = google_compute_disk.mongodb_disk.name
  zone    = "us-east1-b"
  project = "rickmorty-search"
}

# syntax=docker/dockerfile:1
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

# Cópia dos arquivos de projeto usando a nova pasta Backend
COPY Backend/Invoice.Domain/Invoice.Domain.csproj Backend/Invoice.Domain/
COPY Backend/Invoice.Application/Invoice.Application.csproj Backend/Invoice.Application/
COPY Backend/Invoice.Infrastructure/Invoice.Infrastructure.csproj Backend/Invoice.Infrastructure/
COPY Backend/Invoice.API/Invoice.API.csproj Backend/Invoice.API/
RUN dotnet restore Backend/Invoice.API/Invoice.API.csproj

# Cópia do código fonte e publicação
COPY Backend/ Backend/
RUN dotnet publish Backend/Invoice.API/Invoice.API.csproj -c Release -o /app/publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime
WORKDIR /app

RUN apt-get update \
    && apt-get install -y --no-install-recommends libgssapi-krb5-2 \
    && rm -rf /var/lib/apt/lists/*

COPY --from=build /app/publish .

ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080

ENTRYPOINT ["dotnet", "Invoice.API.dll"]